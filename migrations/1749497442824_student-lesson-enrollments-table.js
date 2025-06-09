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
    pgm.createTable('student_lesson_enrollments', {
        id : { type: 'VARCHAR(255)', notNull: true, primaryKey: true},
        lesson_id: { type: 'VARCHAR(255)', notNull: true, references: 'lessons', onDelete: 'CASCADE'},
        started_at: { type: 'TIMESTAMPTZ', notNull: true, default: pgm.func('current_timestamp')},
        completed_at: { type: 'TIMESTAMPTZ', default: pgm.func('current_timestamp')},
        status: { type: 'BOOLEAN', default: false}
    })

    pgm.addConstraint('student_lesson_enrollments', 'fk_student_leson_enrollments_lesson_id', {
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
    pgm.dropTable('student_lesson_enrollments')
};
