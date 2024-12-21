/**dev Home scripts/index.js */
import * as FT from './factory/functions.js';
import * as FHL from './factory/fetchHandlers.js';
(async function(){
	console.log('index.js');
	const async_test = await FT.getIdHelper('async_test'); 
	const responseCallback = async (response)=>{
		const data = await response.text();
		const el_target = await FT.getIdHelper('content_receiver');
		if(el_target){
			await FT.setContent(el_target,data);
			//console.log('el_target: ', data);
		}
		if(response.status === 200){
			async_test.remove();
		}
	};
	const testObject = {
		el_url: async_test,
		response_cb: await responseCallback
	};
	//console.log('async_test:',async_test);
	await FHL.getHyperlinkHandler(testObject);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})();