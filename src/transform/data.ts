/**
 * The destination transformation keys.
 */
export const bitwardenFormat = [
    "folder",
    "favorite",
    "type",
    "name",
    "notes",
    "fields",
    "reprompt",
    "login_uri",
    "login_username",
    "login_password",
    "login_totp"
];

/**
 * A generic transformation type.
 */
interface GenericTransformation {
    /**
     * Key of the destination transformation.
     */
    "key": typeof bitwardenFormat[number],

    /**
     * Change the destination value based on a condition of the original value.
     *
     * @param value Original (Nextcloud) or static value
     */
    "condition"?: (value: any) => any
}

/**
 * A type with a from field.
 */
interface WithFrom extends GenericTransformation {
    /**
     * Which original (Nextcloud) field to get the transformed value from.
     */
    "from": string
}

/**
 * A type with a value field.
 */
interface WithValue extends GenericTransformation {
    /**
     * Static value to transform.
     */
    "value": any
}

/**
 * A valid transformation.
 */
type Transformation = WithFrom | WithValue

/**
 * The transformations to execute.
 */
export const transformations: Transformation[] = [{
    "key": "folder",
    "from": "Folder"
}, {
    "key": "favorite",
    "from": "Favorite",
    "condition": value => {
        return value === "true" ? 1 : "";
    }
}, {
    "key": "type",
    "value": "login"
}, {
    "key": "name",
    "from": "Label"
}, {
    "key": "notes",
    "from": "Notes"
}, {
    "key": "fields",
    "value": ""
}, {
    "key": "reprompt",
    "value": 0
}, {
    "key": "login_uri",
    "from": "Url"
}, {
    "key": "login_username",
    "from": "Username"
}, {
    "key": "login_password",
    "from": "Password"
}, {
    "key": "login_totp",
    "value": ""
}];
