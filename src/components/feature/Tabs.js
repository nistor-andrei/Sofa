import { useState } from 'react';
import styles from './tabs.module.scss';
import { Overview } from './AllTabs/Overview';
import { Video } from './AllTabs/Video';
import { Photo } from './AllTabs/Photo';

export function Tabs({ mediaType }) {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <>
      <ul className={styles.tabs}>
        <li className={activeTab === 'tab1' ? styles.active : ''} onClick={() => setActiveTab('tab1')}>
          Overview
        </li>
        <li className={activeTab === 'tab2' ? styles.active : ''} onClick={() => setActiveTab('tab2')}>
          Videos
        </li>
        <li className={activeTab === 'tab3' ? styles.active : ''} onClick={() => setActiveTab('tab3')}>
          Photos
        </li>
      </ul>
      <div className="outlet">
        {(activeTab === 'tab1' && <Overview media={mediaType} />) || (activeTab === 'tab2' && <Video media={mediaType} />) || (activeTab === 'tab3' && <Photo media={mediaType} />)}
      </div>
    </>
  );
}
