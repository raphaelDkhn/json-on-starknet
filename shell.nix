with import <nixpkgs> { };

let pythonPackages = python39Packages;
in pkgs.mkShell rec {
  name = "impurePythonEnv";
  venvDir = "./env";
  buildInputs = [
    pythonPackages.python
    pythonPackages.venvShellHook
    gmp
  ];

  # Run this command, only after creating the virtual environment
  postVenvCreation = ''
    unset SOURCE_DATE_EPOCH
    pip install -r requirements.txt
  '';

  # Now we can execute any commands within the virtual environment.
  # This is optional and can be left out to run pip manually.
  postShellHook = ''
    # allow pip to install wheels
    unset SOURCE_DATE_EPOCH
  '';
}