let
  pkgs = import <nixpkgs> {};
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    nodejs_20
    nodePackages.pnpm
  ];
}
