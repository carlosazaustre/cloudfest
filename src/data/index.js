/* eslint-disable */
// Types: 1 & 2 & 3
// Type 1 is a moment like welcome or networking
// Type 2 is when a speaker has time to speak
// Type 3 no speaker but has info
export const scheduleInfo = [
  {
    date: 'Thursday 13rd',
    tracks: [
      {
        displayName: 'Auditorium',
        max: 200,
        items: [
          {
            id: 0,
            type: 1,
            content: {
              title: 'Welcome',
              description: 'Agenda will be available soon',
            },
            time: {
              start: {
                hour: '10',
                min: '00',
              },
              end: {
                hour: '10',
                min: '15',
              },
            },
          },
        ],
      },
      {
        displayName: 'Meetup Space',
        max: 70,
        items: [],
      }
    ],
  },
  {
    date: 'Friday 14th',
    tracks: [
      {
        displayName: 'Auditorium',
        max: 200,
        items: [],
      },
      {
        displayName: 'Meetup Space',
        max: 70,
        items: [],
      },
    ],
  },
];

export const eventInfo = {
  title: 'CloudFest Madrid',
  subtitle: 'December 13rd-14th, 2018',
  c4pURL: 'TODO',
  ticketsURL: 'TODO',
  ticketCode: 'GOE18250',
  callToActionMsg: 'Tickets',
  showContdown: true,
  startTime: '13/12/2018 10:00',
  startTimeFormat: 'DD/MM/YYYY HH:mm', // Moment 
};
