{
  description = "React development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

      extraPackages = with pkgs; [
        nodejs
      ];
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [] ++ extraPackages;
      };
    };
}
