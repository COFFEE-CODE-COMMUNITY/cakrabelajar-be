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
    pgm.createTable('lessons', {
        id: { type: 'VARCHAR(255)', notNull: true, primaryKey: true},
        subject_id : { type: 'VARCHAR(255)', notNull: true, references: 'subjects', onDelete: 'CASCADE'},
        title: { type: 'VARCHAR(255)', notNull: true},
        image : { type: 'VARCHAR(300)'},
        description: { type: 'TEXT' },
        created_at : { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('current_timestamp') },
        updated_at : { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('current_timestamp') },
    })

    pgm.addConstraint('lessons', 'fk_lessons_subject_id', {
        foreignKeys: {
            columns: 'subject_id',
            references: 'subjects(id)',
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
    pgm.dropTable('lessons');
};
