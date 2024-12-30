import { MoveOpts } from './lib';

const DEFAULT_MOVE_OPTS: MoveOpts = {
  avoidCreeps: false,
  avoidObstacleStructures: true,
  avoidSourceKeepers: true,
  exact: false,
  keepTargetInRoom: true,
  repathIfStuck: 3,
  roadCost: 1,
  plainCost: 2,
  swampCost: 10,
  priority: 1,
  defaultRoomCost: 2,
  highwayRoomCost: 1,
  sourceKeeperRoomCost: 2,
  maxRooms: 64,
  maxOps: 100000,
  maxOpsPerRoom: 2000
};

const DEFAULT_VISUALIZE_OPTS: PolyStyle = {
  fill: 'transparent',
  stroke: '#fff',
  lineStyle: 'dashed',
  strokeWidth: 0.15,
  opacity: 0.1
};

export const config = {
  DEFAULT_MOVE_OPTS,
  DEFAULT_VISUALIZE_OPTS,
  MEMORY_CACHE_PATH: '_cg',
  MEMORY_CACHE_EXPIRATION_PATH: '_cge',
  MEMORY_PORTAL_PATH: '_cgp'
};
