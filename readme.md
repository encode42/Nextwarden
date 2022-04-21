# Nextwarden
Transform data from Nextcloud Passwords to a Bitwarden compatible format.

This is a proof-of-concept, and may not function in the future.

### Running
Ensure [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) are installed.

1. [Export](https://git.mdns.eu/nextcloud/passwords/-/wikis/Users/Export) your data from Nextcloud Passwords. Ensure the format is set to `Predefined CSV`, and only the `Passwords` option is ticked.
2. `git clone` or download this repository and `cd` into it.
3. Run `yarn install` to install the dependencies.
4. Copy the exported Nextcloud Passwords `Passwords_M_D_YYYY.csv` file to the cloned directory. 
5. Run `yarn run start <passwords file>`. Replace `<passwords file>` with the name of the file you downloaded.
6. [Import](https://vault.bitwarden.com/#/tools/import) the generated `output.csv` file into Bitwarden as `Bitwarden (csv)`!

### Issues
- Many folders are created with site names. I don't know if this is a bug, or an issue with Bitwarden's import feature.
