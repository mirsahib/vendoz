export const truncate = (input: string | null |undefined) => {
    return input!=null && input!=undefined && input.length > 45
        ? `${input.substring(0, 45)}...`
        : input;
};