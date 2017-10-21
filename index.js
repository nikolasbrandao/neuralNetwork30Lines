var synaptic = require('synaptic')

// Vamos criar a rede neural mais simples o possível: uma que consiga resolver a equação XOR.

const { Layer, Network } = synaptic

var inputLayer = new Layer(2)
var hiddenLayer = new Layer(3)
var outputLayer = new Layer(1)

inputLayer.project( hiddenLayer )
hiddenLayer.project( outputLayer )

var myNetwork = new Network({
  input: inputLayer,
  hidden : [hiddenLayer],
  output : outputLayer
})

//Treinando a rede
var learningRate = .3

for ( var i=0; i<2000; i++ ) {

  // 0,0 => 0
  myNetwork.activate([0,0])
  myNetwork.propagate(learningRate, [0])

  // 0,1 => 1
  myNetwork.activate([0,1])
  myNetwork.propagate(learningRate, [1])

  // 1,0 => 1
  myNetwork.activate([1,0])
  myNetwork.propagate(learningRate, [1])

  // 1,1 => 0
  myNetwork.activate([1,1])
  myNetwork.propagate(learningRate,[0])
}

console.log(myNetwork.activate([0,0]));

console.log(myNetwork.activate([0,1]));

console.log(myNetwork.activate([1,0]));

console.log(myNetwork.activate([1,1]));
