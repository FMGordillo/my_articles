import { createSignal, onMount } from "solid-js";

function AsideItem(props) {
  const [isStreaming, setIsStreaming] = createSignal(false);

	async function getStreamingStatus() {
	  try {
		const username = "laspark";

		const getTokenURL = "https://id.twitch.tv/oauth2/token";
		const isStreamingURL = `https://api.twitch.tv/helix/streams?user_login=${username}`;

		const clientId = "wjvrvuqjhehg89tj2zb0vrbysf55w0";
		const clientSecret = import.meta.env.PUBLIC_TWITCH_CLIENT_SECRET;

		const tokenRequest = new Request(getTokenURL, {
		  method: "POST",
		  headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		  },
		  body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
		});

		const accessToken = await fetch(tokenRequest)
		  .then((d) => d.json())
		  .then((j) => j.access_token);

		const isStreamingRequest = new Request(isStreamingURL, {
		  method: "GET",
		  headers: {
			"Client-Id": clientId,
			Authorization: `Bearer ${accessToken}`,
		  },
		});
		
		const response = await fetch(isStreamingRequest)
		  .then((d) => d.json())
		  .then((j) => j.data[0]);


			console.log({ response });
		if(response) {
				console.log('ok');
			setIsStreaming(true);
		}
	  } catch (e) {
		console.error(e);
		}
	}

  onMount(() => {
    if (props.icon === "twitch") {
      getStreamingStatus();
    }
  });


  return (
    <li class="relative w-8 h-8 hover:cursor-pointer">
      <img
        class="w-8 h-8"
        src={`/icons/${props.icon}.svg`}
      />
		{isStreaming() &&
        <span style={{ position: 'absolute', width: '0.75rem', height: '0.75rem', 'background-color': 'red', right: 0, 'border-radius': '8px' }}></span>
			}
    </li>
  );
}

export default AsideItem;
