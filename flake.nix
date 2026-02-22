{
  description = "Dev environment for open-source-event-calendar (ddev + composer)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          # Tools you’ll need inside the shell
          buildInputs = with pkgs; [
            docker        # ddev uses Docker
            docker-compose
            git
            php82         # adjust if project needs a specific version
            ddev          # some nixpkgs include ddev
          ];

          # Make sure docker is available
          shellHook = ''
            echo "Entering dev environment"
            # Optionally make sure docker socket is available
            # This requires your user to be in the docker group
          '';
        };
      }
    );
}
