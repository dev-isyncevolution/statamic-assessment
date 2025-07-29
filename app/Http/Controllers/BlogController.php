<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\Entry;


class BlogController extends Controller
{
     public function index()
    {
        return view('blog.index');
    }

    public function show($slug)
    {
        $entry = Entry::query()
            ->where('collection', 'blog')
            ->where('slug', $slug)
            ->first();

        if (! $entry) {
            abort(404);
        }

        return view('blog.show', $entry->toAugmentedArray());
    }

}
