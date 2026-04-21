<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    use HasFactory, HasUuids;

    /**
     * The table associated with the model.
     */
    protected $table = 'inquiries';

    /**
     * The primary key type.
     */
    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'destination',
        'inquiry_type',
        'travel_date',
        'travelers',
        'message',
        'status',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'travel_date' => 'date',
        'travelers' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Status options
     */
    const STATUS_NEW = 'new';
    const STATUS_CONTACTED = 'contacted';
    const STATUS_FOLLOW_UP = 'follow_up';
    const STATUS_CONVERTED = 'converted';
    const STATUS_CLOSED = 'closed';

    /**
     * Get all status options
     */
    public static function getStatusOptions(): array
    {
        return [
            self::STATUS_NEW => 'New',
            self::STATUS_CONTACTED => 'Contacted',
            self::STATUS_FOLLOW_UP => 'Follow Up',
            self::STATUS_CONVERTED => 'Converted',
            self::STATUS_CLOSED => 'Closed',
        ];
    }

    /**
     * Scope for new inquiries
     */
    public function scopeNew($query)
    {
        return $query->where('status', self::STATUS_NEW);
    }

    /**
     * Scope for tour inquiries
     */
    public function scopeTour($query)
    {
        return $query->where('inquiry_type', 'tour');
    }

    /**
     * Scope for visa inquiries
     */
    public function scopeVisa($query)
    {
        return $query->where('inquiry_type', 'visa');
    }
}
