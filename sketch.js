let nn;
let training_data = [
{
    inputs: [0, 0],
    targets: [0]
},{
    inputs: [0, 1],
    targets: [1]
},{
    inputs: [1, 0],
    targets: [1]
},{
    inputs: [1, 1],
    targets: [0]
}
];

let lr_slider;
let resolution = 20;

function setup() {
    createCanvas(400, 400);
    nn = new NeuralNetwork(2,6,1);
    lr_slider = createSlider(0.1, 1, 0.5, 0.1);
}

function draw() {
    background(0);

    nn.learning_rate = lr_slider.value();

    for(let i=0;i<100;i++){
        let data = random(training_data);
        nn.train(data.inputs, data.targets);
    }

    let resolution = 20;
    let cols = floor(width / resolution);
    let rows = floor(height / resolution);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            let input_1 = i / (cols - 1);
            let input_2 = j / (rows - 1);
            let output = nn.predict([input_1, input_2])[0];
            let col = output * 255;
            fill(col,col);
            noStroke();
            rect(x, y, resolution, resolution);
        }
    }
}
