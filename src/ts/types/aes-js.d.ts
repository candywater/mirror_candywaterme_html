
declare module 'aes-js' {
    function AES(key: string);
    declare class Counter {
        constructor(initValue: string);
    }
    interface IModeOfOperation {
        constructor(key, counter);
        encrypt: Function;
        decrypt: Function;
    }
    interface IHex {
        toBytes: (text: string) => Uint8Array;
        fromBytes: (bytes: Uint8Array) => string;
    }
    export default {
        AES,
        Counter,
        ModeOfOperation: {
            ecb: IModeOfOperation,
            cbc: IModeOfOperation,
            cfb: IModeOfOperation,
            ofb: IModeOfOperation,
            ctr: IModeOfOperation
        },
        utils: {
            hex: IHex,
            utf8: IHex
        }
    };
}