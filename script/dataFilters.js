/**
 * Filter CSV data by column and character/value
 * @param {Array} csvData - Array of row objects
 * @param {String} columnTitle - The column/field name to filter by
 * @param {String} searchChar - The character or string to search for
 * @param {String} mode - Filter mode: 'exact' (exact match), 'include' (contains), 'exclude' (does not contain)
 * @returns {Array} Filtered data
 */
function filterByColumn(csvData, columnTitle, searchChar, mode = 'include') {
	return csvData.filter(row => {
		const value = row[columnTitle];
		if (!value) return false;
		
		if (mode === 'exact') {
			return value === searchChar;
		} else if (mode === 'include') {
			return value.includes(searchChar);
		} else if (mode === 'exclude') {
			return !value.includes(searchChar);
		}
		return false;
	});
}

/**
 * Filter multiple conditions (AND logic)
 * @param {Array} csvData - Array of row objects
 * @param {Array} conditions - Array of {column, char, mode} objects ('exact', 'include', 'exclude')
 * @returns {Array} Filtered data
 */
function filterByMultipleColumns(csvData, conditions) {
	return csvData.filter(row => {
		return conditions.every(condition => {
			const value = row[condition.column];
			if (!value) return false;
			
			const mode = condition.mode || 'include';
			
			if (mode === 'exact') {
				return value === condition.char;
			} else if (mode === 'include') {
				return value.includes(condition.char);
			} else if (mode === 'exclude') {
				return !value.includes(condition.char);
			}
			return false;
		});
	});
}


function SeverityFilter(csvData, SeverityType = []) {
  // If no filters are provided, return the full dataset
  if (SeverityType.length === 0) return csvData;
  console.log('filtering severity', SeverityType);
  return csvData.filter(row => {
    // Condition 1: Is the severity in our selected list?
    const isMatchingSeverity = SeverityType.includes(row.SEVERITY);
    
    // Condition 2: Is the duration more than 5?
	let isLongDuration;
	if(row.SEVERITY === 'LOW'){ isLongDuration = Number(row.DURASI) > 20;}
	else if(row.SEVERITY === 'MINOR'){ isLongDuration = Number(row.DURASI) > 12;}
	else{ isLongDuration = Number(row.DURASI) > 0;}

    // Only return true if BOTH conditions are met
    return isMatchingSeverity && isLongDuration;
  });
}

// 1. Pre-calculate indices in a Map for O(1) lookup
function Sort(sorting, reference, sortBy, sortReference = null){
    let lookup;
    if (sortReference === null) {
        lookup = new Map(reference.map((row,i) => [row, i]));
        console.log('lookup', lookup);
    }else{
        lookup = new Map(reference.map((row,i) => [row[sortReference], i]));
        console.log('lookup', lookup);
    }
    // 2. Sort using the Map
    // Elements not in the reference array are moved to the end (Infinity)
    sorting.sort((a, b) => {
        const indexA = lookup.has(a[sortBy]) ? lookup.get(a[sortBy]) : Infinity;
        const indexB = lookup.has(b[sortBy]) ? lookup.get(b[sortBy]) : Infinity;
        return indexA - indexB;
    });
    console.log(sorting);
    return sorting;
}
