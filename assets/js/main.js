document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('loading-layout').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});


async function fetchPosts(endpoint, page = 1, limit = 16, ajax = 1) {
    try {
        const url = window.location.origin + endpoint + (endpoint.includes('?') ? '&' : '?') + 'page=' + page + '&limit=' + limit + '&ajax=' + ajax;
        console.log(url);
        const response = await fetch(url);
        const data = await response.text();
        const dataStr = data.replaceAll('\n', '').replaceAll('&quot;', '"');
        const jsonData = JSON.parse(dataStr);
        console.log(jsonData);
        return jsonData;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return { data: [] };
    }
}

export { fetchPosts };
