import ListItem from 'ms/common/components/ListItem';
import withResultRenderer from 'ms/common/components/withResultRenderer';
import { trendingUrl } from 'ms/common/constants/';

export default withResultRenderer(ListItem, trendingUrl);
