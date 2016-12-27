import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

const NavigationTest = () => (
  <div>
    <Navigation type='horizontal' actions={actions} />
    <Navigation type='vertical'>
      <Link href='http://' label='Inbox' icon='inbox' />
      <Link href='http://' active label='Profile' icon='person' />
    </Navigation>
  </div>
);
