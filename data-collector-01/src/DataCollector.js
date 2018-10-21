class DataCollector {
  constructor (categories) {
    this.categories        = categories || {};
  }

  /** API */
  record(categoryKey, value, payloadOptional) {
    if (categoryKey === null || categoryKey === undefined) {
      return;
    }
    
    let category = this.categories[categoryKey];
    if (!category) {
      category    = new DataCategory(categoryKey);
      this.categories[categoryKey] = category;
    }

    category.add(value, payloadOptional);
  }
  log(categoryKey) {
    let category = this.categories[categoryKey];
    if (!category) {
      console.warn(`no category exists named ${categoryKey}`);
      return;
    }


    let groupName = `${categoryKey} - ${category.length} entries`;
    console.group(groupName);
    for (let index in category.data) {
      if (category.data.hasOwnProperty(index)) {
        let valueObject = category.data[index];

        if (!Array.isArray(valueObject)) {
          valueObject = [valueObject];
        }

        valueObject.forEach(element => {
          console.log(`${index} : ${element.value}`);
        });

      }
    }
    console.groupEnd(groupName);

  }

  /** GETTERS / SETTERS */


  /** INTERNALS */

}