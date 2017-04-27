
/**
 * from http://www.e-time.it/topics/34-ajax/8-Richiamare%20l%5C'oggetto%20XmlHttpRequest
 */
export function myGetXmlHttpRequest() {

	// variabili
	var
		// risultato
		xhr = false,
		// opzioni activeX dal più nuovo al più vecchio
		activeXoptions = new Array( "Microsoft.XmlHttp", "MSXML4.XmlHttp", "MSXML3.XmlHttp", "MSXML2.XmlHttp", "MSXML.XmlHttp" );

	// primo tentativo come oggetto nativo
	try {
		xhr = new XMLHttpRequest();
	}
	catch (e) {
		// non facciamo niente... semplicemente proviamo un altro modo
	}

	// successivi tentativi come oggetto activeX dal piu' al meno recente
	if ( ! xhr ) {
		var created = false;
		for ( var i = 0 ; i < activeXoptions.length && !created ; i++ ) {
			try {
				// tentativo di creazione
				xhr = new ActiveXObject( activeXoptions[i] );
				// se la creazione non fallisce il codice del blocco try continua a essere eseguito
				created = true;
			}
			catch (e) {
				// non facciamo niente... semplicemente proviamo un altro modo
			}
		} // for ( MSXML options )
	} // if ( ! nativo )

	// restituzione del risultato, eventualmente ancora false se il browser non supporta AJAX
	return xhr;

} // myGetXmlHttpRequest()



/*
 * from http://www.dominopower.com/issues/issue200004/howto002.html
 */
function myGetRequestParameter ( parameterName ) {

	// variabili
	// estraiamo i parametri di get dalla uri della pagina
	var queryString = window.top.location.search.substring(1);

	// Add "=" to the parameter name (i.e. parameterName=value)
	// torna utile nello split della query per cercare il parametro voluto
	var parameterName = parameterName + "=";

	if ( queryString.length > 0 ) {

		// Find the beginning of the string
		begin = queryString.indexOf ( parameterName );

		// If the parameter name is not found, skip it, otherwise return the value
		if ( begin != -1 ) {

			// Add the length (integer) to the beginning
			begin += parameterName.length;

			// Multiple parameters are separated by the "&" sign
			end = queryString.indexOf ( "&" , begin );

			if ( end == -1 ) {
				end = queryString.length
			}// if ( ! end )

			// Return the string (unescapes special characters such as & / = etc...)
			return unescape ( queryString.substring ( begin, end ) );
		} // if ( begin )

		// Return "null" if no parameter has been found
		return "null";

	} // if ( querystring )

}// myGetRequestParametr()
