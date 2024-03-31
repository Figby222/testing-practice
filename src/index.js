function capitalize(string) {
    const result = string[0].toUpperCase() + string.slice(1);
    return result;
}

export { capitalize };