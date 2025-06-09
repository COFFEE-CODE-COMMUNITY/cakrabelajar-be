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
    pgm.createTable('chapters', {
        id: { type: 'VARCHAR(255)', notNull: true, primaryKey: true},
        lesson_id : { type: 'VARCHAR(255)', notNull: true, references: 'lessons', onDelete: 'CASCADE'},
        title : { type: 'VARCHAR(255)', notNull: true},
        order: { type: 'INTEGER', notNull: true, default: 0},
        description: { type: 'TEXT' },
        created_at : { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('current_timestamp')},
        updated_at : { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('current_timestamp')}
    })

    pgm.addConstraint('chapters', 'fk_chapters_lesson_id', {
        foreignKeys: {
            columns: 'lesson_id',
            references: 'lessons(id)',
            onDelete: 'CASCADE'
        }
    })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('chapters');
};
