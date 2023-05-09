import { createSignal, onMount } from "solid-js";

async function getStreamingStatus() {
  try {
    const username = "laspark";

    const getTokenURL = "https://id.twitch.tv/oauth2/token";
    const isStreamingURL = `https://api.twitch.tv/helix/streams?user_login=${username}`;

    const clientId = "wjvrvuqjhehg89tj2zb0vrbysf55w0";
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;

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

    isStreaming = await fetch(isStreamingRequest)
      .then((d) => d.json())
      .then((j) => j.data[0]);
  } catch {}
}

function AsideItem(props) {
  const [isStreaming, setIsStreaming] = createSignal(false);

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
      {isStreaming && (
        <span class="absolute -right-1 -top-1 bg-red-400 rounded w-2 h-2"></span>
      )}
    </li>
  );
}

export default AsideItem;
