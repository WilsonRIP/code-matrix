use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn bench_checked_add(c: &mut Criterion) {
    let mut group = c.benchmark_group("Addition");
    
    group.bench_function("checked_add", |b| {
        b.iter(|| {
            let mut sum = 0u32;
            for i in 0..1000 {
                sum = black_box(sum).checked_add(black_box(i)).unwrap_or(0);
            }
            sum
        })
    });
    
    group.bench_function("unchecked_add", |b| {
        b.iter(|| {
            let mut sum = 0u32;
            for i in 0..1000 {
                // SAFETY: We know these values won't overflow u32
                unsafe {
                    sum = black_box(sum).unchecked_add(black_box(i));
                }
            }
            sum
        })
    });
    
    group.finish();
}

fn bench_checked_mul(c: &mut Criterion) {
    let mut group = c.benchmark_group("Multiplication");
    
    group.bench_function("checked_mul", |b| {
        b.iter(|| {
            let mut product = 1u32;
            for i in 1..100 {
                product = black_box(product).checked_mul(black_box(i % 10 + 1)).unwrap_or(1);
            }
            product
        })
    });
    
    group.bench_function("unchecked_mul", |b| {
        b.iter(|| {
            let mut product = 1u32;
            for i in 1..100 {
                // SAFETY: We know these values won't overflow u32
                unsafe {
                    product = black_box(product).unchecked_mul(black_box(i % 10 + 1));
                }
            }
            product
        })
    });
    
    group.finish();
}

fn bench_checked_sub(c: &mut Criterion) {
    let mut group = c.benchmark_group("Subtraction");
    
    group.bench_function("checked_sub", |b| {
        b.iter(|| {
            let mut start = 10000u32;
            for i in 0..1000 {
                start = black_box(start).checked_sub(black_box(i % 10)).unwrap_or(10000);
            }
            start
        })
    });
    
    group.bench_function("unchecked_sub", |b| {
        b.iter(|| {
            let mut start = 10000u32;
            for i in 0..1000 {
                // SAFETY: We know these values won't underflow u32
                unsafe {
                    start = black_box(start).unchecked_sub(black_box(i % 10));
                }
            }
            start
        })
    });
    
    group.finish();
}

criterion_group!(benches, bench_checked_add, bench_checked_mul, bench_checked_sub);
criterion_main!(benches); 