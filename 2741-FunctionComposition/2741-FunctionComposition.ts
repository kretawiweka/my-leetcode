// Last updated: 4/8/2026, 2:05:27 AM
type F = (x: number) => number;

function compose(functions: F[]): F {
    
	return function(x) {
        let res = x
        
        functions.slice(0).reverse().map((fn) => {
            res = fn(res)   
        })

        return res
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */