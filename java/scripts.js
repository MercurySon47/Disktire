
document.querySelectorAll('.icon-hover').forEach(icon => {
icon.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
});

icon.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1.15)';
});

icon.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
});

document.getElementById('decrement').addEventListener('click', function() {
    let input = document.getElementById('quantity');
    let value = parseInt(input.value);
    if (value > parseInt(input.min)) {
        input.value = value - 1;
    }
});

document.getElementById('increment').addEventListener('click', function() {
    let input = document.getElementById('quantity');
    let value = parseInt(input.value);
    if (value < parseInt(input.max)) {
        input.value = value + 1;
    }
});

src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous">