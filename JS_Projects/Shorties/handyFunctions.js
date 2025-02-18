/**
 * Some handy functions free to use but without any quarantee they do!
 * 'howto' in jsnotes.md
 */
// func 01
export const addAttributes = async (...args) =>{
	const [elem,attributes] = args;
	const object = new Map([['att_objects',attributes]]);
	const atts = object.get('att_objects');
	let el;
	if(elem){
		el = elem;
		if(atts){
			for (const [key, value] of Object.entries(atts)){
				//possible to add if key not exists?
				const modified_key = key.replace('data_', 'data-');
				el.setAttribute(modified_key,value);
			}
		}
	}
	return await el;
};
 

// func 02
export const addClass = async (...args)=>{
	const [elem,add_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(add_class);
		}	
	}
	return await el;
};
// func 03
export const removeClass = async (...args)=>{
	const [elem,remove_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(el.classList.contains(remove_class)){
			el.classList.remove(remove_class);
		}
	}
	return await el;
};

// func 04
export const replaceClass = async (...args)=>{
	const [elem,remove_class,add_class] = args;
	let el;
	if(null !== elem){
		el = elem;
		if(remove_class && add_class){
			el.classList.replace(remove_class,add_class);
		}
	}
	return await el;
};

// func 05
export const addClasses = async (...args)=>{
	const [elem,add_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(add_class)){
			el.classList.add(...add_class);
		}	
	}
	return await el;
};
// func 06
export const removeClasses = async (...args)=>{
	const [elem,remove_class]= args;
	let el;
	if(null !== elem){
		el = elem;
		if(!el.classList.contains(remove_class)){
			el.classList.remove(...remove_class);
		}	
	}
	return await el;
};
 
// func 07
export const domEraser = async (dom_parent) =>{
	let wrap;
	if(dom_parent){
		wrap = dom_parent;
		if(null !== wrap){
			while(wrap.firstChild) wrap.removeChild(wrap.firstChild);
		}
	}
	return await wrap;
};
// func 08
export async function elQuery(...args){
	const [elem,el_all=false,el_parent] = args;
    let el;
	if(true === el_all){
		if(el_parent) el = el_parent.querySelectorAll(elem);
    	else el = document.querySelectorAll(elem);
	}else{
		if(el_parent) el = el_parent.querySelector(elem);
		else el = document.querySelector(elem);
	}
    return await el;
} 
// func 09
export const setContent = async function (...args) { 
	const [elem,content,add_str = false] = args;
	//console.log('elem: ', elem);
	//console.log('content: ', content);
	//console.log('add_str: ', add_str);
	let el;
	if(elem){
		el = elem;
		if(add_str === true) {
			el.innerHTML += content;
		}else{
			el.innerHTML = content;
		}
	}
	return await el;
}; 
// func 10
export const getContent = async (...args) =>{
	const [elem = null,el_parent = false,parent_el=null]=args;
	if(elem !== null){
		let el;
		if(el_parent === true){
			el = await parent_el.querySelector(elem);
		} else {
			el = await document.querySelector(elem);
		}
		return el.innerHTML;
	}
};
 
// func 11
export async function getClassHelper(...args){
	const [class_name,class_parent=null] = args;
	if(class_parent !== null){
		return await class_parent.getElementsByClassName(class_name);
	}
	return await document.getElementsByClassName(class_name);
}
// func 12
export async function getIdHelper(id){
    if(id){
		return await document.getElementById(id);
	}
}

// func 13
export const lorem_ipsum = async ()=>{
	return `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Cras at sem diam. Vestibulum venenatis massa in tincidunt egestas.
	Morbi eu lorem vel est sodales auctor hendrerit placeratrisus.
	<span class='dots'>...</span><span class='more display-none'>
	Etiam rutrum faucibus sem, vitae mattis ipsum ullamcorpereu.
	Donec nec imperdiet nibh, nec vehicula libero. Phasellus velmalesuada nulla.
	Aliquam sed magna aliquam, vestibulum nisi at,cursus nunc.</span></p>`;
};
