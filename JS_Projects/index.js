/**dev Home scripts/index.js */
import * as FT from './factory/functions.js';
import * as FHL from './factory/fetchHandlers.js';
(async function(){
	console.log('index.js');
	const async_test = await FT.getIdHelper('async_test');
	const el_target = await FT.getIdHelper('content_receiver');
	/**
	 * FHL.getHyperlinkHandler
	 * important note, this is raw and needed safety measurements are not implemented yet!
	 */
	const responseCallbackOne = async (response)=>{
		const data = await response.text();
		if(el_target){
			await FT.setContent(el_target,data);
			//console.log('el_target: ', data);
		}
		if(response.status === 200){
			async_test.remove();
		}
	};
	const testObjectOne = {
		el_url: async_test,
		response_cb: await responseCallbackOne
	};
	await FHL.getHyperlinkHandler(testObjectOne);
	/**
	 * FHL.getDataHandler
	 * important note, this is raw and needed safety measurements are not implemented yet!
	 */
	const baseUrl = window.location.origin;
	const result_url = `${baseUrl}/result`;
	const responseCallbackTwo = async (response)=>{
		const data = await response.json();
		console.table({'json_data':data});
		const jsonObjects = new Map([['json_data',data]]);
		const objects = jsonObjects.get('json_data');
		let tpl = `<ul style = 'padding-top: 10px;width:300px;'>
			<li>Step by step</li>
		`;
		for(const[key,val] of Object.entries(objects)){
			tpl +=`<li style='white-space:nowrap;' class='relative display-flex'><dt>${key}</dt> = <dt>${val}</dt></li>`;
		}	
		tpl +=`</ul>`;
		await FT.setContent(el_target, tpl);
	};	
	const testObjectTwo = {
		el_url: result_url,
		response_cb: await responseCallbackTwo
	};
	await FHL.getDataHandler(testObjectTwo);
})();