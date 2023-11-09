const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    const { firstName, surname, id, races } = athlete; // Function destructured
    const latestRace = races.slice().reverse()[0]; // Use slice to create a copy of races array, don't want to modify original array.
    const {date, time} = latestRace; // Extract date & time from latest race object.
    
    const fragment = document.createDocumentFragment();
  
    const title = document.createElement('h2');
    title.textContent = id;
    fragment.appendChild(title);
  
    const list = document.createElement('dl');
  
    const day = new Date(date).getDate();
    const month = MONTHS[new Date(date).getMonth()];
    const year = new Date(date).getFullYear();
  
    const [ first, second, third, fourth ] = time;
    const total = first + second + third + fourth;
  
    const minutes = Math.floor(total / 60); // Removed hours, since we're only working with minutes & seconds
    const seconds = Math.floor(total);
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}` // Format Time
  
    list.innerHTML = /* html */ `
      <dt>Athlete:</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races:</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest):</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest):</dt>
      <dd>${formattedTime}</dd>
    `;
  
    fragment.appendChild(list);

    return fragment;
  }
  
  const {NM372, SV782} = data.response.data
  const nwabisaMasiko = document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml(NM372));
  const schalkVenter = document.querySelector('[data-athlete = "SV782"]').appendChild(createHtml(SV782));