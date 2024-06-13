// src/utils/forwardChaining.js

const forwardChaining = (selectedSymptoms, rules) => {
    let inferredDisease = null;
  
    // Iterate through each rule
    for (const rule of rules) {
      // Check if all symptoms of the rule are included in the selected symptoms
      if (rule.symptoms.every(symptom => selectedSymptoms.includes(symptom))) {
        // If all symptoms match, infer the disease and break the loop
        inferredDisease = rule.disease;
        break;
      }
    }
  
    return inferredDisease;
  };
  
  export default forwardChaining;
  