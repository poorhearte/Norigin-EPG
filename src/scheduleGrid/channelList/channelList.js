import React from 'react';
import useAssets from '../useAssets/useassets';
import Guide from '../guide/guide.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  channelList: {
    display: 'flex',//없으면 모든 시간표가 일렬로
    margin: '0',//없으면 그리드 사이간격 넓어지면서 이상해짐
    padding: '0'//없으면 채널스케쥴이 살짝 뒤로 가면서 시간표랑 안맞아짐 찾기어려웠음 주의할 것
  }
}));

const ChannelList = () => {
  const { assets } = useAssets('epg');
  const classes = useStyles();

  return (
    <div>
      {assets.map(asset => {
        return (
          <ul key={asset.id} className={classes.channelList}>
            {asset.schedules.map((schedule, index) => (
              <Guide
                key={schedule.id + index}
                size={programSize(schedule)}
                schedule={schedule}
                timeOrder={index}
              />
            ))}
          </ul>
        );
      })}
    </div>
  );
};

const hourMinutes = 60;
const hourSize = 600;
const minuteSize = hourSize / hourMinutes;
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function programSize(schedule) {
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);

  let size =
    end.getHours() * hourMinutes +
    end.getMinutes() -
    (start.getHours() * hourMinutes + start.getMinutes());
  return Math.abs(size * minuteSize);
}

function getDatePosition(date) {
  return date.getHours() * hourSize + date.getMinutes() * minuteSize;
}

function showTime(date) {
  return `${('0' + date.getHours()).slice(-2)}:${(
    '0' + date.getMinutes()
  ).slice(-2)}`;
}

function showTitle(start, end) {
  const startShow = new Date(start);
  const endShow = new Date(end);

  return `${startShow.getDate()} ${months[startShow.getMonth()]}: ${showTime(
    startShow
  )} - ${showTime(endShow)}`;
}

export default ChannelList;
export { getDatePosition, showTitle };
