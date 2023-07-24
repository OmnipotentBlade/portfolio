const getRepoInfo = async (repo: string) => {
    
    return fetch(`https://api.github.com/repos/OmnipotentBlade/${repo}`)
        .then(response => response.json())
        .then(data => {
            const arr = [data.stargazers_count, data.forks_count, data.watchers_count];

            return (arr);
        })
        .catch(e => {
            console.error(e);
            return [0,0,0];
        })
    ;
};

export default getRepoInfo;