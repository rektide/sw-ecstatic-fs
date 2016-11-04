import leveljs from 'level-js'
import levelfs from 'level-filesystem'
import memoizee from 'memoizee'

export const fs = memoizee(function(name){
	const
	  level= leveljs(name),
	  fs= levelfs(level),
	return fs
})

export fs("sw-ecstatic-fs") as default
