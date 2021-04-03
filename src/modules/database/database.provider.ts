import * as cls from 'continuation-local-storage';
import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Category } from 'src/entities/category';
import { databaseConfig } from 'src/shared/config/database';
import { PostCategory } from 'src/entities/postCategory';
import { PostComment } from './../../entities/postComment';
import { PostMeta } from './../../entities/postMeta';
import { PostTag } from './../../entities/postTag';
import { Tag } from './../../entities/tag';
import { User } from './../../entities/user';
import { Post } from 'src/entities/post';

const namespace = cls.createNamespace('ENROLMENT_APPLICANTS_SERVICE');

const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col,
};

export const databaseProvider = {
  provide: 'SequelizeInstance',
  useFactory: async () => {
    let config;
    switch (process.env.NODE_ENV) {
      case 'prod':
      case 'production':
        config = databaseConfig.production;
      case 'dev':
      case 'development':
        config = databaseConfig.development;
      default:
        config = databaseConfig.development;
    }
    //(Sequelize as any).__proto__.useCLS(namespace);

    const sequelize = new Sequelize({ ...config, operatorsAliases });
    sequelize.addModels([
     Category,
     PostCategory,
     PostComment,
     PostMeta,
     PostTag,
     Tag,
     User,
     Post
    ]);
    return sequelize.sync({ force: false });
  },
};
