import MediaList from 'ms/common/components/listItem';
import withResultRenderer from 'ms/common/components/withResultRenderer';
import { trendingUrl } from 'ms/common/constants/';

export default withResultRenderer(MediaList, trendingUrl);
