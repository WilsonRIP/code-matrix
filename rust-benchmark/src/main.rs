fn measure_performance<F>(name: &str, iterations: u32, f: F)
where
    F: Fn(u32) -> u32,
{
    use std::time::Instant;
    
    let start = Instant::now();
    let mut result = 0;
    
    for i in 0..iterations {
        result = f(i);
    }
    
    let duration = start.elapsed();
    println!("{}: {:?} (result: {})", name, duration, result);
}

fn main() {
    println!("Rust Unchecked Operations Example");
    
    // Example of checked operations (default behavior)
    let a: u32 = 100;
    let b: u32 = 200;
    
    // Safe addition with overflow checking
    let checked_sum = a.checked_add(b);
    println!("Checked addition: {:?}", checked_sum);
    
    // Safe multiplication with overflow checking
    let checked_product = a.checked_mul(b);
    println!("Checked multiplication: {:?}", checked_product);
    
    // Examples that would overflow:
    let max_u32 = u32::MAX;
    println!("u32::MAX = {}", max_u32);
    
    let checked_overflow_add = max_u32.checked_add(1);
    println!("Checked addition with overflow: {:?}", checked_overflow_add);
    
    // Unchecked operations - NOTE: These will cause undefined behavior on overflow
    let c: u32 = 10;
    let d: u32 = 20;
    
    // SAFETY: We know these values won't overflow
    unsafe {
        let unchecked_sum = c.unchecked_add(d);
        println!("Unchecked addition: {}", unchecked_sum);
        
        let unchecked_product = c.unchecked_mul(d);
        println!("Unchecked multiplication: {}", unchecked_product);
        
        let unchecked_diff = d.unchecked_sub(c);
        println!("Unchecked subtraction: {}", unchecked_diff);
    }
    
    println!("Note: Unchecked operations require Rust 1.79.0 or later");

    // Simple demonstration of checked vs unchecked operations
    let a: u32 = 1000;
    let b: u32 = 234;
    
    println!("Checked add: {:?}", a.checked_add(b));
    unsafe {
        println!("Unchecked add: {}", a.unchecked_add(b));
    }
    
    println!("\nPerformance comparison (higher iteration count):");
    let iterations = 100_000_000;
    
    // Checked add
    measure_performance("Checked add", iterations, |i| {
        let a = i % 1000;
        let b = 42;
        a.checked_add(b).unwrap_or(0)
    });
    
    // Unchecked add
    measure_performance("Unchecked add", iterations, |i| {
        let a = i % 1000;
        let b = 42;
        unsafe { a.unchecked_add(b) }
    });
    
    // Checked mul
    measure_performance("Checked mul", iterations, |i| {
        let a = i % 100;
        let b = 3;
        a.checked_mul(b).unwrap_or(0)
    });
    
    // Unchecked mul
    measure_performance("Unchecked mul", iterations, |i| {
        let a = i % 100;
        let b = 3;
        unsafe { a.unchecked_mul(b) }
    });
    
    println!("\nNote: For more accurate benchmarks, run 'cargo bench'");
}
