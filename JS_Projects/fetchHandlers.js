/**Home assets/scrips/factory/fetchHandlers.js */
export class FetchHandler {
    fetchData(resource, options) {
        return fetch(resource, options);
    }
}
export class FetchStatusHandler {
    decoratee;
    constructor(decoratee) {
        this.decoratee = decoratee;
    }
    async fetchData(resource, options) {
        const response = await this.decoratee.fetchData(resource, options);
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return response;
    }
}
export async function getHandler(args){
	const handlerObjects = new Map([['objects',args]]);
	const argObjects = handlerObjects.get('objects');
	const {el_url ,response_cb} = argObjects;
	const fetch_setup = new FetchStatusHandler(
		new FetchHandler()
	);
	if(el_url !== null){
		const elUrl = el_url;
		const get_data = async ()=>{
			const response = await fetch_setup.fetchData(`${elUrl}`);
			await response_cb(response);
		};
		return await get_data();
	}
}



export async function getHyperlinkHandler(args){
	const handlerObjects = new Map([['objects',args]]);
	const argObjects = handlerObjects.get('objects');
	const {el_url ,response_cb} = argObjects;
	const fetch_setup = new FetchStatusHandler(
		new FetchHandler()
	); 
	if(el_url !== null){
		const elUrl = el_url;
		elUrl.addEventListener('click', async (event)=>{
			event.preventDefault();
			const url = elUrl.href;
			if(url){
				(async ()=>{
					const response = await fetch_setup.fetchData(`${url}`);
					await response_cb(response);
				})();
			}
		});
		
	}
}

