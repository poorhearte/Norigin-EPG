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
          <ul key={asset.channelId} className={classes.channelList}>
            {asset.schedules.map((schedule, index) => 
                (<Guide
                  key={schedule.programId + index}
                  programLeft={getProgramLeft(schedule, index)}
                  programWidth={getProgramWidth(schedule)}
                  schedule={schedule}
                  isStartTimeInitialized={isStartTimeInitialized}
                />)
            )}
          </ul>
        );
      })}
    </div>
  );
};

const hourMinutes = 60;
const HOUR_PX_SIZE = 600;
const MINUTE_PX_SIZE = HOUR_PX_SIZE / hourMinutes;
let isStartTimeInitialized = false;

function getProgramWidth(schedule) {

  //if() TODO 시작시간이 0시이하일 경우 00시로 초기화

  const start = new Date(schedule.start);
  const end = new Date(schedule.end);

  const durationInMinute =
    (end.getHours() * hourMinutes + end.getMinutes()) -
    (start.getHours() * hourMinutes + start.getMinutes());
  
    return Math.abs(durationInMinute * MINUTE_PX_SIZE);
}

let PROGRAM_LEFT_OF_EACH_CHANNEL = 0;
function getProgramLeft(schedule, index){
  if(index===0){
    const start = new Date(schedule.start);
    let size = start.getHours() * hourMinutes + start.getMinutes(); 
    PROGRAM_LEFT_OF_EACH_CHANNEL = Math.abs(size * MINUTE_PX_SIZE)
    return PROGRAM_LEFT_OF_EACH_CHANNEL;
  }
  else
    return PROGRAM_LEFT_OF_EACH_CHANNEL;
}

export function getDatePosition(date) {
  return date.getHours() * HOUR_PX_SIZE + date.getMinutes() * MINUTE_PX_SIZE;
}

// function showTime(date) {
//   return `${('0' + date.getHours()).slice(-2)}:${(
//     '0' + date.getMinutes()
//   ).slice(-2)}`;
// }

// function showTitle(start, end) {
//   const startShow = new Date(start);
//   const endShow = new Date(end);

//   return `${startShow.getDate()} ${months[startShow.getMonth()]}: ${showTime(
//     startShow
//   )} - ${showTime(endShow)}`;
// }

//export { getDatePosition, showTitle };
export default ChannelList;

