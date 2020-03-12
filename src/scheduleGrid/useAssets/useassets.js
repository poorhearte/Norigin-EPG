import { useState, useEffect } from 'react';
//import axios from 'axios';

const useAssets = asset => {
  const [assets, setAssets] = useState([]);
  const [shows, setShows] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false });

  useEffect(() => {
    (async asset => {
      try {
        /*const response = await axios.get(
          `${process.env.REACT_APP_URL}/${asset}`
        );

        setAssets(response.data.channels);
        setShows(response.data);
        setLoading(false);*/

        setAssets(channelData);
        setShows(channelData.data);
        setLoading(false);


      } catch (err) {
        setLoading(false);
        setError({
          status: true,
          message: "Couldn't connect to Server. Please try again"
        });
      }
    })(asset);
  }, [asset]);

  return { assets, shows, error, loading };
};

export default useAssets;

const channelData =
[
  {
      "channelId": "PLUTO_ch",
      "channelName": "PLUTO_channel",
      "providerId": "PLT",
      "schedules": [
          {
              "programId": "PLUTO_pr",
              "title": "PLUTO_pr_title",
              "start": "2020-03-11T00:00:00Z",
              "end": "2020-03-11T02:10:00Z"
          },
          {
              "programId": "PLUTO_pr",
              "title": "PLUTO_pr_title",
              "start": "2020-03-11T02:10:00Z",
              "end": "2020-03-11T02:30:00Z"
          },
          {
              "programId": "PLUTO_pr",
              "title": "PLUTO_pr_title",
              "start": "2020-03-11T02:30:00Z",
              "end": "2020-03-11T04:05:00Z"
          },
          {
              "programId": "PLUTO_pr",
              "title": "PLUTO_pr_title",
              "start": "2020-03-11T04:05:00Z",
              "end": "2020-03-11T05:15:00Z"
          },
          {
              "programId": "PLUTO_pr",
              "title": "PLUTO_pr_title",
              "start": "2020-03-11T05:15:00Z",
              "end": "2020-03-11T09:20:00Z"
          }
      ]
  },
  {
      "channelId": "RKT_ch",
      "channelName": "RKT_channel",
      "providerId": "RKT",
      "schedules": [
          {
              "programId": "RKT_pr",
              "title": "2 Days & 1 Night",
              "start": "2020-03-11T00:00:00Z",
              "end": "2020-03-11T01:10:00Z"
          },
          {
              "programId": "RKT_pr",
              "title": "2 Days & 1 Night",
              "start": "2020-03-11T01:10:00Z",
              "end": "2020-03-11T02:30:00Z"
          },
          {
              "programId": "RKT_pr",
              "title": "2 Days & 1 Night",
              "start": "2020-03-11T02:30:00Z",
              "end": "2020-03-11T03:05:00Z"
          },
          {
              "programId": "RKT_pr",
              "title": "2 Days & 1 Night",
              "start": "2020-03-11T03:05:00Z",
              "end": "2020-03-11T05:45:00Z"
          },
          {
              "programId": "RKT_pr",
              "title": "2 Days & 1 Night",
              "start": "2020-03-11T05:45:00Z",
              "end": "2020-03-11T08:20:00Z"
          }
      ]
  }
];


/*{
  "channels": [
    {
      "id": "sky1",
      "title": "Sky 1",
      "images": {
        "logo": "https://img.noriginmedia.com/cloudberry/logo_sky1.png"
      },
      "schedules": [
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:00:00+09:00",
          "end": "2020-03-04T00:50:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:50:00+09:00",
          "end": "2020-03-04T01:10:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:10:00+09:00",
          "end": "2020-03-04T01:30:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:30:00+09:00",
          "end": "2020-03-04T02:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:00:00+09:00",
          "end": "2020-03-04T02:20:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:20:00+09:00",
          "end": "2020-03-04T03:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:10:00+09:00",
          "end": "2020-03-04T04:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:00:00+09:00",
          "end": "2020-03-04T04:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:50:00+09:00",
          "end": "2020-03-04T05:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:10:00+09:00",
          "end": "2020-03-04T06:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:00:00+09:00",
          "end": "2020-03-04T06:40:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:40:00+09:00",
          "end": "2020-03-04T07:00:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:00:00+09:00",
          "end": "2020-03-04T07:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:30:00+09:00",
          "end": "2020-03-04T08:10:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:10:00+09:00",
          "end": "2020-03-04T09:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:00:00+09:00",
          "end": "2020-03-04T09:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:50:00+09:00",
          "end": "2020-03-04T10:20:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:20:00+09:00",
          "end": "2020-03-04T10:50:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:50:00+09:00",
          "end": "2020-03-04T11:40:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:40:00+09:00",
          "end": "2020-03-04T12:10:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:10:00+09:00",
          "end": "2020-03-04T12:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:50:00+09:00",
          "end": "2020-03-04T13:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:30:00+09:00",
          "end": "2020-03-04T14:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:20:00+09:00",
          "end": "2020-03-04T14:40:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:40:00+09:00",
          "end": "2020-03-04T15:30:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:30:00+09:00",
          "end": "2020-03-04T16:20:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:20:00+09:00",
          "end": "2020-03-04T17:10:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:10:00+09:00",
          "end": "2020-03-04T18:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:00:00+09:00",
          "end": "2020-03-04T18:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:30:00+09:00",
          "end": "2020-03-04T19:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:00:00+09:00",
          "end": "2020-03-04T19:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:20:00+09:00",
          "end": "2020-03-04T20:00:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:00:00+09:00",
          "end": "2020-03-04T20:20:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:20:00+09:00",
          "end": "2020-03-04T21:00:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:00:00+09:00",
          "end": "2020-03-04T21:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:30:00+09:00",
          "end": "2020-03-04T22:20:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:20:00+09:00",
          "end": "2020-03-04T22:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:50:00+09:00",
          "end": "2020-03-04T23:40:00+09:00"
        }
      ]
    },
    {
      "id": "silver",
      "title": "Silver",
      "images": {
        "logo": "https://img.noriginmedia.com/cloudberry/logo_silver.png"
      },
      "schedules": [
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:00:00+09:00",
          "end": "2020-03-04T00:20:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:20:00+09:00",
          "end": "2020-03-04T01:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:00:00+09:00",
          "end": "2020-03-04T01:40:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:40:00+09:00",
          "end": "2020-03-04T02:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:00:00+09:00",
          "end": "2020-03-04T02:50:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:50:00+09:00",
          "end": "2020-03-04T03:30:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:30:00+09:00",
          "end": "2020-03-04T04:10:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:10:00+09:00",
          "end": "2020-03-04T04:40:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:40:00+09:00",
          "end": "2020-03-04T05:10:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:10:00+09:00",
          "end": "2020-03-04T05:40:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:40:00+09:00",
          "end": "2020-03-04T06:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:20:00+09:00",
          "end": "2020-03-04T07:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:10:00+09:00",
          "end": "2020-03-04T07:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:50:00+09:00",
          "end": "2020-03-04T08:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:20:00+09:00",
          "end": "2020-03-04T08:40:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:40:00+09:00",
          "end": "2020-03-04T09:10:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:10:00+09:00",
          "end": "2020-03-04T09:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:50:00+09:00",
          "end": "2020-03-04T10:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:10:00+09:00",
          "end": "2020-03-04T11:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:00:00+09:00",
          "end": "2020-03-04T11:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:30:00+09:00",
          "end": "2020-03-04T11:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:50:00+09:00",
          "end": "2020-03-04T12:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:10:00+09:00",
          "end": "2020-03-04T12:50:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:50:00+09:00",
          "end": "2020-03-04T13:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:30:00+09:00",
          "end": "2020-03-04T13:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:50:00+09:00",
          "end": "2020-03-04T14:40:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:40:00+09:00",
          "end": "2020-03-04T15:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:30:00+09:00",
          "end": "2020-03-04T16:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:00:00+09:00",
          "end": "2020-03-04T16:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:50:00+09:00",
          "end": "2020-03-04T17:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:30:00+09:00",
          "end": "2020-03-04T17:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:50:00+09:00",
          "end": "2020-03-04T18:40:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:40:00+09:00",
          "end": "2020-03-04T19:30:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:30:00+09:00",
          "end": "2020-03-04T20:00:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:00:00+09:00",
          "end": "2020-03-04T20:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:30:00+09:00",
          "end": "2020-03-04T20:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:50:00+09:00",
          "end": "2020-03-04T21:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:20:00+09:00",
          "end": "2020-03-04T21:50:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:50:00+09:00",
          "end": "2020-03-04T22:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:30:00+09:00",
          "end": "2020-03-04T23:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T23:00:00+09:00",
          "end": "2020-03-04T23:20:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T23:20:00+09:00",
          "end": "2020-03-04T23:50:00+09:00"
        }
      ]
    },
    {
      "id": "hbo",
      "title": "HBO",
      "images": {
        "logo": "https://img.noriginmedia.com/cloudberry/logo_hbo.png"
      },
      "schedules": [
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:00:00+09:00",
          "end": "2020-03-04T00:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:20:00+09:00",
          "end": "2020-03-04T00:40:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:40:00+09:00",
          "end": "2020-03-04T01:10:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:10:00+09:00",
          "end": "2020-03-04T01:30:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:30:00+09:00",
          "end": "2020-03-04T02:00:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:00:00+09:00",
          "end": "2020-03-04T02:40:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:40:00+09:00",
          "end": "2020-03-04T03:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:10:00+09:00",
          "end": "2020-03-04T04:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:00:00+09:00",
          "end": "2020-03-04T04:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:50:00+09:00",
          "end": "2020-03-04T05:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:10:00+09:00",
          "end": "2020-03-04T06:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:00:00+09:00",
          "end": "2020-03-04T06:50:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:50:00+09:00",
          "end": "2020-03-04T07:20:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:20:00+09:00",
          "end": "2020-03-04T07:40:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:40:00+09:00",
          "end": "2020-03-04T08:00:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:00:00+09:00",
          "end": "2020-03-04T08:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:30:00+09:00",
          "end": "2020-03-04T08:50:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:50:00+09:00",
          "end": "2020-03-04T09:20:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:20:00+09:00",
          "end": "2020-03-04T10:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:10:00+09:00",
          "end": "2020-03-04T10:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:30:00+09:00",
          "end": "2020-03-04T11:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:00:00+09:00",
          "end": "2020-03-04T11:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:50:00+09:00",
          "end": "2020-03-04T12:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:30:00+09:00",
          "end": "2020-03-04T13:10:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:10:00+09:00",
          "end": "2020-03-04T13:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:30:00+09:00",
          "end": "2020-03-04T14:20:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:20:00+09:00",
          "end": "2020-03-04T15:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:00:00+09:00",
          "end": "2020-03-04T15:40:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:40:00+09:00",
          "end": "2020-03-04T16:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:30:00+09:00",
          "end": "2020-03-04T16:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:50:00+09:00",
          "end": "2020-03-04T17:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:10:00+09:00",
          "end": "2020-03-04T17:30:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:30:00+09:00",
          "end": "2020-03-04T18:00:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:00:00+09:00",
          "end": "2020-03-04T18:20:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:20:00+09:00",
          "end": "2020-03-04T18:50:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:50:00+09:00",
          "end": "2020-03-04T19:40:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:40:00+09:00",
          "end": "2020-03-04T20:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:30:00+09:00",
          "end": "2020-03-04T21:20:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:20:00+09:00",
          "end": "2020-03-04T22:10:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:10:00+09:00",
          "end": "2020-03-04T23:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T23:00:00+09:00",
          "end": "2020-03-04T23:30:00+09:00"
        }
      ]
    },
    {
      "id": "cw",
      "title": "The CW",
      "images": {
        "logo": "https://img.noriginmedia.com/cloudberry/logo_cw.png"
      },
      "schedules": [
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:00:00+09:00",
          "end": "2020-03-04T00:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:20:00+09:00",
          "end": "2020-03-04T01:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:00:00+09:00",
          "end": "2020-03-04T01:40:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:40:00+09:00",
          "end": "2020-03-04T02:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:00:00+09:00",
          "end": "2020-03-04T02:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:30:00+09:00",
          "end": "2020-03-04T03:20:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:20:00+09:00",
          "end": "2020-03-04T03:40:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:40:00+09:00",
          "end": "2020-03-04T04:20:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:20:00+09:00",
          "end": "2020-03-04T04:40:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:40:00+09:00",
          "end": "2020-03-04T05:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:20:00+09:00",
          "end": "2020-03-04T06:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:00:00+09:00",
          "end": "2020-03-04T06:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:20:00+09:00",
          "end": "2020-03-04T07:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:00:00+09:00",
          "end": "2020-03-04T07:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:50:00+09:00",
          "end": "2020-03-04T08:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:30:00+09:00",
          "end": "2020-03-04T09:20:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:20:00+09:00",
          "end": "2020-03-04T10:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:00:00+09:00",
          "end": "2020-03-04T10:40:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:40:00+09:00",
          "end": "2020-03-04T11:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:30:00+09:00",
          "end": "2020-03-04T12:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:20:00+09:00",
          "end": "2020-03-04T12:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:50:00+09:00",
          "end": "2020-03-04T13:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:10:00+09:00",
          "end": "2020-03-04T13:40:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:40:00+09:00",
          "end": "2020-03-04T14:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:20:00+09:00",
          "end": "2020-03-04T15:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:00:00+09:00",
          "end": "2020-03-04T15:50:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:50:00+09:00",
          "end": "2020-03-04T16:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:30:00+09:00",
          "end": "2020-03-04T17:20:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:20:00+09:00",
          "end": "2020-03-04T18:10:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:10:00+09:00",
          "end": "2020-03-04T19:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:00:00+09:00",
          "end": "2020-03-04T19:30:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:30:00+09:00",
          "end": "2020-03-04T20:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:10:00+09:00",
          "end": "2020-03-04T20:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:50:00+09:00",
          "end": "2020-03-04T21:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:30:00+09:00",
          "end": "2020-03-04T22:10:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:10:00+09:00",
          "end": "2020-03-04T22:40:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:40:00+09:00",
          "end": "2020-03-04T23:20:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T23:20:00+09:00",
          "end": "2020-03-04T23:40:00+09:00"
        }
      ]
    },
    {
      "id": "vox",
      "title": "Vox",
      "images": {
        "logo": "https://img.noriginmedia.com/cloudberry/logo_vox.png"
      },
      "schedules": [
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:00:00+09:00",
          "end": "2020-03-04T00:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:50:00+09:00",
          "end": "2020-03-04T01:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:30:00+09:00",
          "end": "2020-03-04T01:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:50:00+09:00",
          "end": "2020-03-04T02:30:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:30:00+09:00",
          "end": "2020-03-04T03:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:10:00+09:00",
          "end": "2020-03-04T03:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:50:00+09:00",
          "end": "2020-03-04T04:40:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:40:00+09:00",
          "end": "2020-03-04T05:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:20:00+09:00",
          "end": "2020-03-04T05:40:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:40:00+09:00",
          "end": "2020-03-04T06:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:30:00+09:00",
          "end": "2020-03-04T06:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:50:00+09:00",
          "end": "2020-03-04T07:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:20:00+09:00",
          "end": "2020-03-04T08:10:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:10:00+09:00",
          "end": "2020-03-04T08:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:50:00+09:00",
          "end": "2020-03-04T09:40:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:40:00+09:00",
          "end": "2020-03-04T10:10:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:10:00+09:00",
          "end": "2020-03-04T11:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:00:00+09:00",
          "end": "2020-03-04T11:40:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:40:00+09:00",
          "end": "2020-03-04T12:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:20:00+09:00",
          "end": "2020-03-04T12:40:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:40:00+09:00",
          "end": "2020-03-04T13:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:30:00+09:00",
          "end": "2020-03-04T14:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:00:00+09:00",
          "end": "2020-03-04T14:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:30:00+09:00",
          "end": "2020-03-04T15:00:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:00:00+09:00",
          "end": "2020-03-04T15:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:30:00+09:00",
          "end": "2020-03-04T16:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:00:00+09:00",
          "end": "2020-03-04T16:40:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:40:00+09:00",
          "end": "2020-03-04T17:00:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:00:00+09:00",
          "end": "2020-03-04T17:50:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:50:00+09:00",
          "end": "2020-03-04T18:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:30:00+09:00",
          "end": "2020-03-04T19:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:00:00+09:00",
          "end": "2020-03-04T19:50:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:50:00+09:00",
          "end": "2020-03-04T20:30:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:30:00+09:00",
          "end": "2020-03-04T20:50:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:50:00+09:00",
          "end": "2020-03-04T21:20:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:20:00+09:00",
          "end": "2020-03-04T22:10:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:10:00+09:00",
          "end": "2020-03-04T22:40:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:40:00+09:00",
          "end": "2020-03-04T23:10:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T23:10:00+09:00",
          "end": "2020-03-04T23:50:00+09:00"
        }
      ]
    },
    {
      "id": "history",
      "title": "History",
      "images": {
        "logo": "https://img.noriginmedia.com/cloudberry/logo_history.png"
      },
      "schedules": [
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:00:00+09:00",
          "end": "2020-03-04T00:40:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:40:00+09:00",
          "end": "2020-03-04T01:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:00:00+09:00",
          "end": "2020-03-04T01:30:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:30:00+09:00",
          "end": "2020-03-04T02:20:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:20:00+09:00",
          "end": "2020-03-04T03:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:10:00+09:00",
          "end": "2020-03-04T03:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:50:00+09:00",
          "end": "2020-03-04T04:10:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:10:00+09:00",
          "end": "2020-03-04T05:00:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:00:00+09:00",
          "end": "2020-03-04T05:40:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:40:00+09:00",
          "end": "2020-03-04T06:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:10:00+09:00",
          "end": "2020-03-04T06:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:30:00+09:00",
          "end": "2020-03-04T07:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:00:00+09:00",
          "end": "2020-03-04T07:50:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:50:00+09:00",
          "end": "2020-03-04T08:30:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:30:00+09:00",
          "end": "2020-03-04T09:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:10:00+09:00",
          "end": "2020-03-04T10:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:00:00+09:00",
          "end": "2020-03-04T10:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:30:00+09:00",
          "end": "2020-03-04T11:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:10:00+09:00",
          "end": "2020-03-04T11:40:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:40:00+09:00",
          "end": "2020-03-04T12:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:00:00+09:00",
          "end": "2020-03-04T12:30:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:30:00+09:00",
          "end": "2020-03-04T13:00:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:00:00+09:00",
          "end": "2020-03-04T13:40:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:40:00+09:00",
          "end": "2020-03-04T14:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:00:00+09:00",
          "end": "2020-03-04T14:20:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:20:00+09:00",
          "end": "2020-03-04T14:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:50:00+09:00",
          "end": "2020-03-04T15:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:20:00+09:00",
          "end": "2020-03-04T16:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:10:00+09:00",
          "end": "2020-03-04T16:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:30:00+09:00",
          "end": "2020-03-04T16:50:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:50:00+09:00",
          "end": "2020-03-04T17:40:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:40:00+09:00",
          "end": "2020-03-04T18:30:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:30:00+09:00",
          "end": "2020-03-04T18:50:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:50:00+09:00",
          "end": "2020-03-04T19:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:30:00+09:00",
          "end": "2020-03-04T20:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:00:00+09:00",
          "end": "2020-03-04T20:40:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:40:00+09:00",
          "end": "2020-03-04T21:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:00:00+09:00",
          "end": "2020-03-04T21:20:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:20:00+09:00",
          "end": "2020-03-04T22:10:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:10:00+09:00",
          "end": "2020-03-04T22:50:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:50:00+09:00",
          "end": "2020-03-04T23:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T23:30:00+09:00",
          "end": "2020-03-04T23:50:00+09:00"
        }
      ]
    },
    {
      "id": "sixx",
      "title": "Sixx",
      "images": {
        "logo": "https://img.noriginmedia.com/cloudberry/logo_sixx.png"
      },
      "schedules": [
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:00:00+09:00",
          "end": "2020-03-04T00:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:50:00+09:00",
          "end": "2020-03-04T01:30:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:30:00+09:00",
          "end": "2020-03-04T01:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:50:00+09:00",
          "end": "2020-03-04T02:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:20:00+09:00",
          "end": "2020-03-04T03:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:10:00+09:00",
          "end": "2020-03-04T03:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:30:00+09:00",
          "end": "2020-03-04T03:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:50:00+09:00",
          "end": "2020-03-04T04:30:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:30:00+09:00",
          "end": "2020-03-04T05:20:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:20:00+09:00",
          "end": "2020-03-04T05:40:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:40:00+09:00",
          "end": "2020-03-04T06:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:00:00+09:00",
          "end": "2020-03-04T06:50:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:50:00+09:00",
          "end": "2020-03-04T07:40:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:40:00+09:00",
          "end": "2020-03-04T08:30:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:30:00+09:00",
          "end": "2020-03-04T09:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:00:00+09:00",
          "end": "2020-03-04T09:30:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:30:00+09:00",
          "end": "2020-03-04T09:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:50:00+09:00",
          "end": "2020-03-04T10:40:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:40:00+09:00",
          "end": "2020-03-04T11:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:30:00+09:00",
          "end": "2020-03-04T12:20:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:20:00+09:00",
          "end": "2020-03-04T13:10:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:10:00+09:00",
          "end": "2020-03-04T13:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:30:00+09:00",
          "end": "2020-03-04T14:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:20:00+09:00",
          "end": "2020-03-04T15:00:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:00:00+09:00",
          "end": "2020-03-04T15:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:30:00+09:00",
          "end": "2020-03-04T16:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:10:00+09:00",
          "end": "2020-03-04T16:50:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:50:00+09:00",
          "end": "2020-03-04T17:10:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:10:00+09:00",
          "end": "2020-03-04T17:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:30:00+09:00",
          "end": "2020-03-04T18:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:10:00+09:00",
          "end": "2020-03-04T19:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:00:00+09:00",
          "end": "2020-03-04T19:30:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:30:00+09:00",
          "end": "2020-03-04T20:00:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:00:00+09:00",
          "end": "2020-03-04T20:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:20:00+09:00",
          "end": "2020-03-04T21:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:00:00+09:00",
          "end": "2020-03-04T21:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:50:00+09:00",
          "end": "2020-03-04T22:40:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:40:00+09:00",
          "end": "2020-03-04T23:10:00+09:00"
        }
      ]
    },
    {
      "id": "tv2norway",
      "title": "TV 2 Norway",
      "images": {
        "logo": "https://img.noriginmedia.com/cloudberry/logo_tv2.png"
      },
      "schedules": [
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:00:00+09:00",
          "end": "2020-03-04T00:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T00:50:00+09:00",
          "end": "2020-03-04T01:40:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T01:40:00+09:00",
          "end": "2020-03-04T02:00:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:00:00+09:00",
          "end": "2020-03-04T02:20:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T02:20:00+09:00",
          "end": "2020-03-04T03:10:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:10:00+09:00",
          "end": "2020-03-04T03:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:30:00+09:00",
          "end": "2020-03-04T03:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T03:50:00+09:00",
          "end": "2020-03-04T04:20:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:20:00+09:00",
          "end": "2020-03-04T04:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T04:50:00+09:00",
          "end": "2020-03-04T05:20:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:20:00+09:00",
          "end": "2020-03-04T05:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T05:50:00+09:00",
          "end": "2020-03-04T06:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T06:10:00+09:00",
          "end": "2020-03-04T07:00:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:00:00+09:00",
          "end": "2020-03-04T07:40:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T07:40:00+09:00",
          "end": "2020-03-04T08:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:00:00+09:00",
          "end": "2020-03-04T08:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T08:20:00+09:00",
          "end": "2020-03-04T09:10:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:10:00+09:00",
          "end": "2020-03-04T09:30:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T09:30:00+09:00",
          "end": "2020-03-04T10:20:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:20:00+09:00",
          "end": "2020-03-04T10:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T10:50:00+09:00",
          "end": "2020-03-04T11:20:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:20:00+09:00",
          "end": "2020-03-04T11:50:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T11:50:00+09:00",
          "end": "2020-03-04T12:20:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T12:20:00+09:00",
          "end": "2020-03-04T13:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:00:00+09:00",
          "end": "2020-03-04T13:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:20:00+09:00",
          "end": "2020-03-04T13:40:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T13:40:00+09:00",
          "end": "2020-03-04T14:30:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T14:30:00+09:00",
          "end": "2020-03-04T15:00:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:00:00+09:00",
          "end": "2020-03-04T15:40:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T15:40:00+09:00",
          "end": "2020-03-04T16:00:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:00:00+09:00",
          "end": "2020-03-04T16:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T16:20:00+09:00",
          "end": "2020-03-04T17:10:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:10:00+09:00",
          "end": "2020-03-04T17:30:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T17:30:00+09:00",
          "end": "2020-03-04T18:10:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:10:00+09:00",
          "end": "2020-03-04T18:30:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T18:30:00+09:00",
          "end": "2020-03-04T19:20:00+09:00"
        },
        {
          "title": "Interesting Show",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:20:00+09:00",
          "end": "2020-03-04T19:40:00+09:00"
        },
        {
          "title": "Game of Thrones",
          "id": "dummy_program_id",
          "start": "2020-03-04T19:40:00+09:00",
          "end": "2020-03-04T20:00:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:00:00+09:00",
          "end": "2020-03-04T20:20:00+09:00"
        },
        {
          "title": "Vikings",
          "id": "dummy_program_id",
          "start": "2020-03-04T20:20:00+09:00",
          "end": "2020-03-04T21:10:00+09:00"
        },
        {
          "title": "Cool Stuff",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:10:00+09:00",
          "end": "2020-03-04T21:50:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T21:50:00+09:00",
          "end": "2020-03-04T22:40:00+09:00"
        },
        {
          "title": "Supernatural",
          "id": "dummy_program_id",
          "start": "2020-03-04T22:40:00+09:00",
          "end": "2020-03-04T23:10:00+09:00"
        },
        {
          "title": "Awesome Program",
          "id": "dummy_program_id",
          "start": "2020-03-04T23:10:00+09:00",
          "end": "2020-03-04T23:50:00+09:00"
        }
      ]
    },

  ]
};*/
