import Ecstatic from "ecstatic"
import ServerRequest from "sw-serverrequest-bridge"

const ecstatic= Ecstatic({root: __dirname + "/public"})

self.addEventListener("fetch", function(fe){
	const
	  serverRequest= ServerRequest(fe),
	  serverResponse= serverRequest.response,
	  fetchResponse= serverRequest.fetchResponse
	fe.respondWith(new Promise(resolve){
		serverResponse.on("end", function(){
			resolve(fetchResponse)
		})
	})

	ecstatic(serverRequest.request, serverRequest.response)
})
