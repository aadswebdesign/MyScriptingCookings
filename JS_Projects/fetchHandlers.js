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














//==================================================
//todo, sort this out and is for later if I need it?
/*
export async function InitFetchHandler(...args){
	const [click_elem,url] = args;
	const controller = new AbortController();
	if(click_elem){
		click_elem.addEventListener('click', async ()=>{
			try {
				console.log("Starting fetch");
				const response = await fetch(url, {
				  signal: controller.signal,
				});
				console.log(`Response: ${response.status}`);
			} catch (e) {
				console.error(`Error: ${e}`);
			}			
		});
	}
}
export async function CancelFetchHandler(...args){
	const [click_elem,url] = args;
	const controller = new AbortController();
	if(click_elem){
		click_elem.addEventListener('click', async ()=>{
			controller.abort();
			console.log("Canceled fetch");	
		});
	}
}
*/
//export async function basicFetchAPIData(){
	//todo console.log('basicFetchAPIData');
//}
//export async function yieldFetchAPIData(){
	//todo console.log('yieldFetchAPIData');
//}

