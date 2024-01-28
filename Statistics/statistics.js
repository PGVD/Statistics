class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
  
    mean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        return sortedData[middleIndex];
      }
    }
  
    mode() {
      const frequencyMap = new Map();
      let maxFrequency = 0;
      let modes = [];
  
      this.data.forEach(value => {
        const frequency = (frequencyMap.get(value) || 0) + 1;
        frequencyMap.set(value, frequency);
  
        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          modes = [value];
        } else if (frequency === maxFrequency) {
          modes.push(value);
        }
      });
  
      return modes.length === this.data.length ? [] : modes;
    }
  
    // Measures of Dispersion
  
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const mean = this.mean();
      const squaredDifferences = this.data.map(value => Math.pow(value - mean, 2));
      return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    interquartileRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const lowerQIndex = Math.floor(sortedData.length / 4);
      const upperQIndex = Math.ceil((3 * sortedData.length) / 4);
  
      const lowerQuartile = sortedData[lowerQIndex];
      const upperQuartile = sortedData[upperQIndex];
  
      return upperQuartile - lowerQuartile;
    }
  
    coefficientOfVariation() {
      return (this.standardDeviation() / this.mean()) * 100;
    }
  }
  
  // Example usage
  const data = [12, 15, 18, 20, 22, 25, 30, 35, 40];
  const statistics = new DescriptiveStatistics(data);
  
  console.log('Mean:', statistics.mean());
  console.log('Median:', statistics.median());
  console.log('Mode:', statistics.mode());
  console.log('Range:', statistics.range());
  console.log('Variance:', statistics.variance());
  console.log('Standard Deviation:', statistics.standardDeviation());
  console.log('Interquartile Range:', statistics.interquartileRange());
  console.log('Coefficient of Variation:', statistics.coefficientOfVariation());
  