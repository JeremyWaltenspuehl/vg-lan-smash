async function fetchChars() {
    await (await fetch("http://localhost:9090/bundles/vg-lan-smash/assets/charindex.json")).json().value;
}

const charindex = fetchChars()