export const truncate = (input: string | null) => {
    return input != null && input.length > 45
        ? `${input.substring(0, 45)}...`
        : input;
};