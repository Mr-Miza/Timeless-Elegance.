function renderWatches(watches, containerId) {
    const watchesList = document.getElementById(containerId);
    
    watches.forEach((watch) => {
      const watchElement = document.createElement('div');
      watchElement.innerHTML = `
        <h2>${watch.name}</h2>
        <p>Type: ${watch.type}</p>
        <p>${watch.description}</p>
        <img src="${watch.imageUrl}" alt="${watch.name}">
        <hr>
      `;
      watchesList.appendChild(watchElement);
    });
  }