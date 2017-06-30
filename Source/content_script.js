walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCLG\b/g, "Not a real sport");
	v = v.replace(/\CLGWIN\b/g, "Not a real sport");
	v = v.replace(/\bCounter Logic\b/g, "Not a real sport");
	v = v.replace(/\bCounter Logic Gaming\b/g, "Not a real sport");
	v = v.replace(/\bVeolocity\b/g, "Uses a Potato");
	v = v.replace(/\bveolocity\b/g, "Uses a Potato");
	
	textNode.nodeValue = v;
}


