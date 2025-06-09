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
    pgm.createTable('chapter_contents', {
        id: { type: 'VARCHAR(255)', notNull: true, primaryKey: true},
        chapter_id : { type: 'VARCHAR(255)', notNull: true, references: 'chapters', onDelete: 'CASCADE'},
        order: { type: 'INTEGER', notNull: true, default: 0},
        content: { type: 'TEXT' },
        created_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('current_timestamp')},
        updated_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('current_timestamp')},
    })

    pgm.createConstraint('chapter_contents', 'fk_chapter_contents_chapter_id', {
        foreignKeys: {
            columns: 'chapter_id',
            references: 'chapters(id)',
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
    pgm.dropTable('chapter_contents')
};
