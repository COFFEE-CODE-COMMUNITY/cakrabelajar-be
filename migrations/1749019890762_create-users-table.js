/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.createTable('users', {
        id: {type: 'VARCHAR(255)', notNull: true, primaryKey: true},
        fullname : { type: 'VARCHAR(50)', notNull: true},
        password: {type: 'VARCHAR(255)', notNull:true},
        email: {type: 'VARCHAR(255)', notNull: true, unique: true},
        school_name: {type: 'VARCHAR(100)'},
        grade_level: {type: 'INTEGER'},
        profile_image: {type: 'VARCHAR(255)'},
        created_at: {
            type: 'TIMESTAMPTZ',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        updated_at: {
            type: 'TIMESTAMPTZ',
            notNull: true,
            default: pgm.func('current_timestamp')
        }
    })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('users')
};
