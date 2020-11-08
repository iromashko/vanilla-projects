async function plot(pointsArray, featureName) {
  tfvis.render.scatterplot(
    {
      name: `${featureName} vs House Price`,
    },
    {
      values: [pointsArray],
      series: ['original'],
    },
    {
      xLabel: featureName,
      yLabel: 'Price',
    }
  );
}

function normalise(tensor) {
  const min = tensor.min();
  const max = tensor.max();
  const normalisedTensor = tensor.sub(min).div(max.sub(min));
  return { tensor: normalisedTensor, min, max };
}

function denormalise(tensor, min, max) {
  const denormalisedTensor = tensor.mul(max.sub(min)).add(min);
  return denormalisedTensor;
}

async function run() {
  const houseSalesDataset = tf.data.csv('/linear-regression/kc_house_data.csv');

  const pointsDataset = houseSalesDataset.map((record) => ({
    x: record.sqft_living,
    y: record.price,
  }));
  const points = await pointsDataset.toArray();
  if (points.length % 2 !== 0) {
    points.pop();
  }

  tf.util.shuffle(points);

  plot(points, 'Square feet');

  const featureValues = points.map((p) => p.x);
  const featureTensor = tf.tensor2d(featureValues, [featureValues.length, 1]);

  const labelValues = points.map((p) => p.y);
  const labelTensor = tf.tensor2d(labelValues, [labelValues.length, 1]);

  const normalisedFeature = normalise(featureTensor);
  const normalisedLabel = normalise(labelTensor);

  normalisedFeature.tensor.print();

  const [trainingFeatureTensor, testingFeatureTensor] = tf.split(
    normalisedFeature.tensor,
    2
  );
  const [trainingLabelTensor, testingLabelTensor] = tf.split(
    normalisedLabel.tensor,
    2
  );
  trainingFeatureTensor.print(true);
}

run();
