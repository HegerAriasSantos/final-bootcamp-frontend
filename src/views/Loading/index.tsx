import './Loading.scss';

function Loading() {
  return (
    <div id='Loading'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
